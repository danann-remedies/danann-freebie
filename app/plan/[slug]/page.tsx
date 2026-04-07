type Plan = {
  title: string;
  desc: string;
  image: string;
  pdf: string;
};

const data: Record<string, Plan> = {
  "hair-fall": {
    title: "Hair Fall Control Diet Plan",
    desc: "Reduce hair fall and boost strong, healthy hair naturally.",
    image: "/featured/01-hair-fall-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/hair-fall-diet-plan-weekly-danann-remedies.pdf",
  },
  "weight-loss": {
    title: "Weight Loss Diet Plan",
    desc: "Burn fat and achieve sustainable weight loss.",
    image: "/featured/02-weight-loss-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/weight-loss-diet-plan-weekly-danann-remedies.pdf",
  },
  "muscle-gain": {
    title: "Muscle Gain Diet Plan",
    desc: "Build lean muscle and gain healthy weight effectively.",
    image:
      "/featured/03-muscle-gain-and-weight-gain-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/weight-gain-and-muscle-building-diet-plan-danann-remedies.pdf",
  },

  acidity: {
    title: "Acidity Relief Diet Plan",
    desc: "Relieve acidity, gas, and improve digestion naturally.",
    image: "/featured/04-acidity-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/acidity-and-gut-health-diet-plan.pdf",
  },

  constipation: {
    title: "Constipation Relief Diet Plan",
    desc: "Improve digestion and fix gut health with fiber-rich nutrition.",
    image: "/featured/05-constipation-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/constipation-diet-plan-weekly-danann-remedies.pdf",
  },

  immunity: {
    title: "Immunity Boosting Diet Plan",
    desc: "Strengthen your immune system with proper nutrition.",
    image: "/featured/06-immunity-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/immunity-boosting-diet-plan-weekly-danann-remedies.pdf",
  },

  pregnancy: {
    title: "Pregnancy Nutrition Diet Plan",
    desc: "Support a healthy pregnancy for both mother and baby.",
    image: "/featured/07-pregnancy-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/pregnancy-diet-plan-weekly-danann-remedies.pdf",
  },

  bp: {
    title: "High Blood Pressure Diet Plan",
    desc: "Manage BP and improve heart health naturally.",
    image: "/featured/08-bp-diet-plan-weekly-danann-remedies.jpg",
    pdf: "/pdfs/high-blood-pressure-bp-management-diet-plan-weekly-danann-remedies.pdf",
  },
};

import ClientPage from "./ClientPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = data[slug];

  if (!item) {
    return <div className="p-10 text-center text-white">Plan not found</div>;
  }

  return <ClientPage item={item} slug={slug} />;
}
