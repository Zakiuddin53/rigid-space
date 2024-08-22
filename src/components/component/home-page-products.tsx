import Link from "next/link";

export default function HomePageProducts() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-20 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
              Our Top Projects
            </h2>
            <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of our most successful and innovative projects.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <div className="relative group">
              <img
                src="/placeholder.svg"
                alt="Project 1"
                width={500}
                height={400}
                className="object-cover w-full h-64 transition-opacity duration-300 group-hover:opacity-50"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Project 1
                </h3>
                <p className="text-sm text-primary-foreground">
                  A cutting-edge web application that revolutionizes the way
                  users interact with data.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <div className="relative group">
              <img
                src="/placeholder.svg"
                alt="Project 2"
                width={500}
                height={400}
                className="object-cover w-full h-64 transition-opacity duration-300 group-hover:opacity-50"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Project 2
                </h3>
                <p className="text-sm text-primary-foreground">
                  A mobile-first application that streamlines the way users
                  manage their daily tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <div className="relative group">
              <img
                src="/placeholder.svg"
                alt="Project 3"
                width={500}
                height={400}
                className="object-cover w-full h-64 transition-opacity duration-300 group-hover:opacity-50"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Project 3
                </h3>
                <p className="text-sm text-primary-foreground">
                  A data visualization tool that helps users make informed
                  decisions based on complex data sets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
