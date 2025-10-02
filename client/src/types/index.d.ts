type ProviderType = "google" | "github" | "microsoft";

interface User {
  id: string;
  full_name: string;
  email: string;
  image: string;
  city: string;
  country: string;
}
