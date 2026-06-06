import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import postsData from "@/content/linkedin/posts.json";
import { LinkedinAdminClient, type LinkedinPost } from "./linkedin-admin-client";

export const metadata: Metadata = {
  title: "Espace LinkedIn",
  description: "Espace interne IA Solidaire pour préparer et organiser les publications LinkedIn.",
  robots: {
    index: false,
    follow: false
  }
};

export default function LinkedinAdminPage() {
  const posts = postsData.posts as LinkedinPost[];

  return (
    <>
      <PageHero
        eyebrow="Espace interne"
        title="Préparation LinkedIn"
        description="Un espace simple pour préparer, organiser, suivre et copier les futures publications LinkedIn d'IA Solidaire, sans connexion ni publication automatique."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <LinkedinAdminClient posts={posts} />
        </Container>
      </section>
    </>
  );
}
