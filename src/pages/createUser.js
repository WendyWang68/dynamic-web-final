import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CreateUserForm from "@/app/components/CreateUserForm";

export default function CreateUser({ createUser }) {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(false);
    }, []);

    const handleCreateUser = async (userData) => {
        try {
            setIsLoggedIn(true);
            router.push("/");
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <main>
            {!isLoggedIn && <CreateUserForm createUser={handleCreateUser} />}
        </main>
    );
}
