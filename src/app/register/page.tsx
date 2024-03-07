"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        rpassword: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/register", user)
            console.log("Singup success", response.data)
            router.push("/profile/" + user.username)
        } catch (error: any) {
            console.log(error.message)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0 && user.password == user.rpassword && user.password != '123'){
            setButtonDisabled(false)
        } else{
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className="relative pt-10 flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className="w-full m-auto bg-white lg:max-w-lg">
                <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">
                    Create an account
                    </CardTitle>
                    <CardDescription className="text-center">
                    Enter your email and password to sign up
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                    <Label htmlFor="username">Name</Label>
                    <Input 
                        id="username" 
                        type="text" 
                        placeholder="username" 
                        value={user.username} 
                        onChange={(e) => setUser({...user, username: e.target.value})} 
                        />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="email"
                        value={user.email} 
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                        />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password"
                        type="password"
                        placeholder="password"
                        value={user.password} 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                        />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="password">Repeat Password</Label>
                    <Input 
                        id="rpassword"
                        type="password"
                        placeholder="repeat password"
                        value={user.rpassword} 
                        onChange={(e) => setUser({...user, rpassword: e.target.value})} 
                        />
                    </div>
                    <span className=" text-blue-600 hover:underline text-sm">
                    Forget password ?
                    </span>
                </CardContent>
                <CardFooter className="flex flex-col">
                    {
                        buttonDisabled
                        ?
                        <Button className="w-full bg-[#8881F1] hover:bg-[#8881F1]"
                        type="submit"
                        >
                            Sign Up
                        </Button>
                        :
                        <Button className="w-full bg-[#6C63FF] hover:bg-[#6C63FF]"
                        type="submit"
                        onClick={onSignup}>
                            {/* {buttonDisabled ? "no" : "s"} */}
                            Sign Up
                        </Button>
                    }
                    <p className="mt-2 text-xs text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <span onClick={() => {
                        console.log() 
                    }} className=" text-blue-600 hover:underline"><Link href="./login">Sign In</Link></span>
                    </p>
                </CardFooter>
                </Card>
            </div>
        </div>
    )
}