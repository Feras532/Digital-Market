"use client"
import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { trpc } from "@/trpc/client"
import Image from 'next/image'
const page = () => {



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({})

    const onsubmit = ({ email, password }: TAuthCredentialsValidator) => {
        mutate({ email, password })
    }
    return (
        <>
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
                {/* for small devices we will have fixed width of 350px */}
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        {/* <Icons.logo className='h-20 w-20' /> */}
                        <Image
                            src='/main-icon.png'
                            alt='empty cart'
                            width={100}
                            height={100}
                        />
                        <h1 className="text-3xl font-bold">
                            Create an account now
                        </h1>

                        <Link href='/sign-in'
                            className={buttonVariants({ variant: 'link', className: "text-muted-foreground gap-2" })}>
                            If you have an account, Sign-in instead
                            <ArrowRight className='3-w 3-h'></ArrowRight>
                        </Link>
                    </div>

                    <div className="grid gap-6 ">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        {...register("email")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.email,
                                        })}
                                        placeholder="yourEmail@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor='email'>Password</Label>
                                    <Input
                                        {...register("password")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.password,
                                        })}
                                        placeholder="********"
                                        type="password"
                                    />
                                </div>

                                <Button>Sign up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page