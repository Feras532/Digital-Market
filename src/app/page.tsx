import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-purple-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            welcome to our digital market where u can bla bla bla bla bla blabla
            bla blabla bla bla bla bla blabla bla blabla bla blabla bla blabla
            bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla
            bla blabla bla bla
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-grey-200 bg-grey-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-col-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"></div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
