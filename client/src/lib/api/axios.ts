import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Public API - for unauthenticated requests
export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// Private API - for authenticated requests
export const privateApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// Public API interceptors - minimal processing
publicApi.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Private API interceptors - handle authentication
privateApi.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // Add any auth headers if needed (though cookies are handled automatically)
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

privateApi.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;

    // Handle 401/403 errors (token expired)
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Initialize retry count if not exists
      if (!originalRequest._retryCount) {
        originalRequest._retryCount = 0;
      }

      // Check if we've exceeded max retries (5 attempts)
      if (originalRequest._retryCount >= 5) {
        const currentPath = window.location.pathname + window.location.search;
        window.location.href = `/sign-in?callbackUrl=${encodeURIComponent(
          currentPath,
        )}`;
        return Promise.reject(error);
      }

      // Increment retry count
      originalRequest._retryCount++;

      try {
        console.log(`Token refresh attempt ${originalRequest._retryCount}/5`);

        // Attempt to refresh the token
        await privateApi.post("/auth/refresh-token");

        // Reset retry count on successful refresh
        originalRequest._retryCount = 0;

        // Retry the original request
        return privateApi(originalRequest);
      } catch (refreshError) {
        console.error(
          `Token refresh failed (attempt ${originalRequest._retryCount}/5):`,
          refreshError,
        );

        // If this was the last attempt, redirect to login with from param
        if (originalRequest._retryCount >= 5) {
          const currentPath = window.location.pathname + window.location.search;
          window.location.href = `/sign-in?callbackUrl=${encodeURIComponent(
            currentPath,
          )}`;
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
