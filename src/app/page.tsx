import MaxWithWrapper from '@/components/MaxWithWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MaxWithWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{' '}
            <span className="text-blue-600">digital asset</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every Asset on our Platform is verified
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality promises &rarr;</Button>
          </div>
        </div>
        {/* TODO : list of Products */}
      </MaxWithWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWithWrapper className="py-20"> </MaxWithWrapper>
      </section>
    </>
  );
}
