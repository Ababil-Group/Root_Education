import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import SectionName from "@/components/ui/SectionName";
import FaqAccordion from "../../faq/FaqAccordion";

const faqs = [
  {
    question: "What is the name of the country?",
    answer: "The name of the country is Canada.",
  },
  {
    question: "What is the capital of Canada?",
    answer: "The capital of Canada is Ottawa.",
  },
  {
    question: "What is the official language of Canada?",
    answer: "Canada has two official languages: English and French.",
  },
  {
    question: "Is Canada a safe country to study in?",
    answer:
      "Yes, Canada is considered one of the safest countries for international students.",
  },
  {
    question: "How much does it cost to study in Canada?",
    answer:
      "Tuition fees vary, but on average, it costs between CAD 15,000 to CAD 30,000 per year.",
  },
  {
    question: "Can I work while studying in Canada?",
    answer:
      "Yes, students can work up to 20 hours per week during semesters and full-time during breaks.",
  },
  {
    question: "Do I need a visa to study in Canada?",
    answer:
      "Yes, international students need a study permit to study in Canada.",
  },
  {
    question: "What are the top universities in Canada?",
    answer:
      "Top universities include the University of Toronto, UBC, and McGill University.",
  },
  {
    question: "What is the climate like in Canada?",
    answer:
      "Canada has a varied climate, but generally cold winters and warm summers.",
  },
  {
    question: "Is health insurance required for students in Canada?",
    answer: "Yes, health insurance is mandatory for international students.",
  },
];

const FAQ = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <FadeInDownWithSlowBounce className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SectionName name="FAQ" position="start" />
            <h2 className="my-5 text-start text-4xl font-semibold lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-7 mt-5 text-sm font-medium">
              A Frequently Asked Questions (FAQ) section provides concise
              answers to common queries, helping users quickly find essential
              information about a product or service.
            </p>
          </div>
          <div></div>
        </div>
      </FadeInDownWithSlowBounce>

      <div className="container grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2">
        <div className="space-y-5">
          {faqs.slice(0, 5).map((faq) => (
            <FaqAccordion
              title={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
        </div>
        <div className="space-y-5">
          {faqs.slice(5, 10).map((faq) => (
            <FaqAccordion
              title={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
