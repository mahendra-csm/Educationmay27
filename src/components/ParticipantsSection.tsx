import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Landmark, Briefcase, Wallet, Cpu } from "lucide-react";

const participants = [
  {
    icon: GraduationCap,
    title: "Assessment Researchers & Psychometricians",
    headline: "Advance Measurement Science",
    desc: "Share findings on validity, reliability, psychometrics, item response theory, and evidence-based assessment design.",
    color: "#1A56DB",
    gradient: "from-blue-600 to-blue-500",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Briefcase,
    title: "Educators & Curriculum Designers",
    headline: "Improve Learning Outcomes",
    desc: "Explore how assessment informs curriculum design, formative feedback, competency mapping, and classroom evaluation.",
    color: "#0891B2",
    gradient: "from-cyan-600 to-teal-500",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Landmark,
    title: "Policy Makers & Accreditation Experts",
    headline: "Define Quality Standards",
    desc: "Discuss policy frameworks, accreditation criteria, accountability systems, and equitable assessment practices.",
    color: "#059669",
    gradient: "from-emerald-600 to-green-500",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Cpu,
    title: "Learning Analytics & EdTech Leaders",
    headline: "Harness Data for Insight",
    desc: "Present innovations in adaptive assessment, data-driven learning analytics, AI-supported evaluation, and digital testing tools.",
    color: "#7C3AED",
    gradient: "from-violet-600 to-purple-500",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=90",
  },
  {
    icon: Wallet,
    title: "Graduate Students & Early Career Scholars",
    headline: "Build Academic Visibility",
    desc: "Connect with mentors, present emerging research, and deepen expertise in assessment, evaluation, and educational measurement.",
    color: "#D97706",
    gradient: "from-amber-600 to-orange-500",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=90",
  },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gradient-section relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            This Conference Is <span className="text-gradient-blue">Built For You</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Whether you design assessments, evaluate learning outcomes, or shape education policy, there is a seat at this table for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {participants.slice(0, 3).map((participant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[280px] sm:h-[320px] md:h-[340px]"
            >
              <img
                src={participant.image}
                alt={participant.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${participant.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <participant.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{participant.title}</h3>
                <span
                  className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 w-fit"
                  style={{ color: "white", background: `${participant.color}90` }}
                >
                  {participant.headline}
                </span>
                <p className="text-xs text-white/70 leading-relaxed">{participant.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {participants.slice(3).map((participant, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38 + index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[260px] sm:h-[280px] md:h-[300px]"
            >
              <img
                src={participant.image}
                alt={participant.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${participant.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                  <participant.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{participant.title}</h3>
                <span
                  className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 w-fit"
                  style={{ color: "white", background: `${participant.color}90` }}
                >
                  {participant.headline}
                </span>
                <p className="text-xs text-white/70 leading-relaxed">{participant.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
