import { useEffect, useState } from "react";
import { data } from "./constant";

type FAQProps = {
  idx: number;
  faq: {
    question: string;
    answer: string;
  };
};

function FAQItem({ faq, idx }: FAQProps) {
  const [showFAQ, setShowFAQ] = useState(false);

  const handleToggle = () => {
    setShowFAQ((value) => !value);
  };

  useEffect(() => {
    idx === 0 && setShowFAQ(true);
  }, []);

  return (
    <div>
      <div key={idx} className="">
        <button type="button" onClick={handleToggle}>
          {">"}
        </button>
        <h1>{faq.question}</h1>
        {showFAQ && <p>{faq.answer}</p>}
      </div>
    </div>
  );
}

export function FAQComponent() {
  return (
    <div>
      <h1>FAQComponent</h1>
      {data?.map((item, index) => (
        <FAQItem faq={item} idx={index} />
      ))}
    </div>
  );
}
