
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/AuthContext";
import { LogIn, LogOut, User } from "lucide-react";

export const AuthButtons = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      {!currentUser ? (
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1" 
          asChild
        >
          <Link to="/login">
            <LogIn size={16} className="mr-1" />
            <span>Connexion</span>
          </Link>
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <User size={16} className="mr-1" />
              <span className="max-w-[100px] truncate">
                {currentUser.email?.split('@')[0] || "Utilisateur"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="cursor-default opacity-70">
              {currentUser.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 flex items-center gap-2">
              <LogOut size={14} /> Se déconnecter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
