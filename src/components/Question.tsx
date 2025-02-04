"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const Data = [
  {
    question: "Могут ли возникнуть трудности в работе с конструктором?",
    answer:
      "На обучающей платформе INO мы предоставляем подробные и понятные инструкции для облегчения работы с конструктором. Наши инструкции разработаны так, чтобы дать ученикам четкое понимание того, как использовать инструменты и ресурсы нашей платформы. Мы стремимся убедиться, что наши пользователи могут без труда следовать инструкциям, что способствует более эффективному обучению и предотвращению возможных трудностей.",
  },
  {
    question: "Какой возраст подходит для занятия с конструктором?",
    answer:
      "На платформе INO предусмотрены материалы и задания, которые адаптированы для разных возрастных групп. Мы создали учебные модули, которые подходят для учеников разных возрастов, начиная с подростков и до взрослых. Наши обучающие курсы разделены на уровни сложности, что позволяет каждому ученику выбрать оптимальный путь обучения в зависимости от его возраста, навыков и интересов. Независимо от возраста, наша платформа предоставляет возможность изучения различных аспектов физики, робототехники, программирования, схемотехники и электроники.  ",
  },
  {
    question: "Как происходит доставка конструктора?",
    answer:
      "Доставка конструктора на нашей платформе INO включена в стоимость набора. Мы предоставляем два варианта доставки: по почте и курьером. Время доставки может варьироваться от 3 до 10 дней в зависимости от вашего региона. Мы стремимся обеспечить удобство и доступность для всех наших пользователей, и поэтому предоставляем разные способы доставки, чтобы удовлетворить различные потребности.      ",
  },
  {
    question: "Чем полезны профориентационные тесты?",
    answer:
      "Профориентационные тесты на платформе INO играют важную роль в помощи ученикам принимать осознанный выбор в своей будущей карьере. Эти тесты предоставляют ценную информацию о навыках, интересах и способностях студентов. Путем анализа результатов профориентационных тестов ученики могут получить более ясное представление о том, в какой области им стоит развивать свои навыки и посвящать время обучению",
  },
];

const Question = () => {
  return (
    <div className="grid justify-items-center">
      <h1 className="text-[52px] leading-[72.8px] font-medium font-nunito text-text_accent mt-[140px] mb-[48px]">
        Ответили на популярные вопросы
      </h1>
      {Data.map((e, i) => (
        <div key={i} className="border-b-[1px] border-solid border-[#C9C9C9]">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-[1280px] h-[140px]">
                  <span className="font-nunito font-medium text-[32px] leading-[44.8px] text-text_accent">
                    {e.question}
                  </span>
                  <Image
                    alt=""
                    src="/ep_arrow-down-bold.png"
                    className={`${open ? "rotate-90 transform" : ""}`}
                    width={48}
                    height={48}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-[24px] leading-[33.6px] w-[1034px] max-w-full mb-[36px] ml-[24px] border-l-[1px] pl-[20px]  border-solid border-[#C9C9C9]">
                  {e.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default Question;
