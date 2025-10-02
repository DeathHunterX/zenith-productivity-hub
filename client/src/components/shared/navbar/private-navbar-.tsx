import { clearUser } from "@/common/redux/slices/user.slice";
import { useAppDispatch, useAppSelector } from "@/common/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { useSignOut } from "@/features/auth/api/use-sign-out";
import {
  BadgeCheck,
  Bell,
  CreditCard,
  LogOut,
  MenuIcon,
  MessageSquare,
  Sparkles,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Breadcrumbs } from "../breadcrumbs";
import Logo from "../logo";
import ThemeToggle from "../toggle/theme-toggle";

const PrivateNavbar = () => {
  const router = useRouter();

  const { toggleSidebar } = useSidebar();
  const user = useAppSelector((state) => state.user.info);

  const dispatch = useAppDispatch();

  const { mutate: signOut } = useSignOut();

  const handleSignOut = () => {
    signOut();
    dispatch(clearUser());
  };

  return (
    <nav className="bg-white dark:bg-sidebar sticky top-0 z-50">
      <div className="px-4">
        <div className="flex flex-row justify-between items-center p-2">
          <div className="flex items-center gap-x-3 py-1 md:hidden">
            <button className="hover:bg-sidebar-accent p-2 cursor-pointer rounded-md hover:text-white">
              <MenuIcon size={18} onClick={toggleSidebar} />
            </button>
            <Logo size="md" link="/dashboard" />/ Personal
          </div>

          <div className="flex-row items-center gap-x-3 hidden md:flex">
            <Breadcrumbs />
          </div>

          <div className="flex flex-row items-center gap-x-3">
            <ThemeToggle />
            <MessageSquare size={18} />
            <Bell size={18} />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.image} alt={user?.full_name} />
                  <AvatarFallback className="rounded-lg">
                    {user?.full_name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {/* <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user?.full_name}
                    </span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div> */}

                {/* <ChevronsUpDown className="ml-auto size-4" /> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                //   side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user?.image} alt={user?.full_name} />
                      <AvatarFallback className="rounded-lg">
                        {user?.full_name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">
                        {user?.full_name}
                      </span>
                      <span className="truncate text-xs">{user?.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => router.push("/settings")}>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User />
                    Change Account
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSignOut()}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
