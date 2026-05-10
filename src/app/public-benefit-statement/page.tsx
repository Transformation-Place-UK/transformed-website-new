import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Benefit Statement",
};

export default function PublicBenefitStatement() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Public Benefit Statement
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            The charity provides public benefit by advancing the Christian faith
            through accessible worship, teaching, and outreach activities. It
            supports young people and the wider community by offering mentoring,
            educational support, and programmes that promote personal
            development, wellbeing, and moral values. All services are open to
            the public regardless of background, and are designed to improve
            spiritual, emotional, and social outcomes.
          </p>
          <h2 className="text-3xl font-serif font-bold">
            Activities and Services
          </h2>
          <p className="text-lg sm:text-xl sm:text-left">
            The charity will:
            <ul className="list-disc list-inside">
              <li>
                Organise regular worship services, Bible studies, and
                youth-focused discipleship programmes;
              </li>
              <li>
                Deliver mentoring, leadership training, and educational support
                for young people;
              </li>
              <li>
                Host community events, workshops, and outreach initiatives to
                promote Christian values;
              </li>
              <li>
                Provide pastoral care and support to individuals and families;
              </li>
              <li>
                Partner with local organisations to address social needs such as
                poverty, isolation, and youth disengagement.
              </li>
            </ul>
          </p>
          <h2 className="text-3xl font-serif font-bold">Beneficiaries</h2>
          <p className="text-lg sm:text-xl sm:text-left">
            The charity's services are intended for:
            <ul className="list-disc list-inside">
              <li>
                Children and young people, particularly those facing
                disadvantage or lack of support;
              </li>
              <li>
                Families and individuals seeking spiritual growth or community
                connection;
              </li>
              <li>
                The wider public, through inclusive outreach and community
                engagement.
              </li>
            </ul>
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            To advance the Christian faith in accordance with the Holy Bible for
            the benefit of the public, in particular but not exclusively by:
            <ul className="list-decimal list-inside">
              <li>
                Proclaiming and teaching the Gospel of Jesus Christ through
                worship services, evangelistic outreach, discipleship
                programmes, and the distribution of Christian literature and
                media;
              </li>
              <li>
                Providing pastoral care, spiritual guidance, and support to
                individuals and communities in need, regardless of background,
                faith, or circumstance;
              </li>
              <li>
                Promoting Christian values and moral education through seminars,
                conferences, community events, and media outreach;
              </li>
              <li>
                Supporting charitable initiatives that relieve poverty, advance
                education, and promote good health, particularly among
                disadvantaged or vulnerable individuals and communities;
              </li>
              <li>
                Training and equipping individuals for Christian ministry and
                leadership, both locally and internationally;
              </li>
              <li>
                Engaging and empowering children and young people through
                faith-based youth programmes, mentoring, educational support,
                recreational activities, leadership development, and outreach
                initiatives designed to nurture their spiritual, emotional, and
                social wellbeing.
              </li>
            </ul>
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            The charity shall operate primarily within the United Kingdom and
            internationally as the trustees may determine.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
