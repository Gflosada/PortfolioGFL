import { useRouter } from "next/router";
import { projects } from "../../public/projects.data";

export default function Project() {
  const { query } = useRouter();
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
  const project = projects.find(p => p.slug === slug);

  if (!project) return <div className="p-8">Project not found.</div>;

  return (
    <article className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-zinc-500 mt-2">{project.subtitle}</p>
      </header>

      <img
        src={project.cover}
        alt={project.title}
        className="rounded-xl w-full mb-6"
      />

      {/* Case-study content */}
      <section className="space-y-4 leading-relaxed">
        <p>{project.summary}</p>
        {/* Add sections: Problem → Process → Solution → Impact, etc. */}
      </section>

      {project.links?.length ? (
        <div className="mt-8 space-x-3">
          {project.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
