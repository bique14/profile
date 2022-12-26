import { useEffect, useState } from "react";
import { classList } from "../../../../libs/classList";

const TITLE: string = "💄 Frontend Tricks";

interface Card {
  text: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface CardItemProps {
  card: Card;
}

interface URL {
  text: string;
  url: string;
}

const urls: URL[] = [
  {
    text: "Loading css animation",
    url: "https://css-tricks.com/single-element-loaders-the-spinner",
  },
  {
    text: "WEB API Text-to-Speech",
    url: "https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h",
  },
];

const FrontendTricks = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchMetaTags = async (text: string, url: string) => {
      const response = await fetch(url);
      const htmlText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");

      // get a list of all the meta elements
      const metaElements = doc.getElementsByTagName("meta");
      const titleTag = doc.getElementsByTagName("title")[0]?.innerText || "";

      let description: string = "";
      let image: string = "";

      for (let i = 0; i < metaElements.length; i++) {
        const metaElement = metaElements[i];
        const name = metaElement.getAttribute("name");
        const content = metaElement.getAttribute("content");

        if (name === "twitter:description") {
          description = content || "";
        } else if (name === "twitter:image" || name === "twitter:image:src") {
          image = content || "";
        }
      }

      return {
        text,
        title: titleTag,
        description,
        image,
        url,
      };
    };

    const fetchCards = async () => {
      const cardPromises = urls.map((url) =>
        fetchMetaTags(
          url.text,
          `https://cors-anywhere.herokuapp.com/${url.url}`
        )
      );
      const cards = await Promise.all(cardPromises);
      setCards([...cards]);
    };

    fetchCards();
  }, []);

  return (
    <div className="h-full flex flex-col w-9/12 mx-auto overflow-scroll">
      <h1 className="text-5xl font-bold mb-12">{TITLE}</h1>

      <div className="flex flex-col gap-10">
        {cards?.map((card) => {
          return <CardItem key={card.title} card={card} />;
        })}
      </div>
    </div>
  );
};

const CardItem = (props: CardItemProps) => {
  const { card } = props;

  const urlWithoutProxy: string = card.url.replace(
    "https://cors-anywhere.herokuapp.com/",
    ""
  );

  const onOpenCardUrl = (url: string) => {
    window.open(url, "_blank");
  };

  const defaultText: string =
    "Something problems about network. Wait and drink a coffee ☕️";

  return (
    <>
      <h1 className="text-2xl font-bold -mb-6">{card.text}</h1>
      <div
        className="flex border border-[rgba(155,155,155,0.4)] rounded h-32 cursor-pointer"
        onClick={() => onOpenCardUrl(urlWithoutProxy)}
      >
        <div className="flex flex-col text-sm w-3/5 justify-center mx-4">
          <span className="">{card.title || defaultText}</span>
          <span className="text-[rgb(155,155,155)] my-1">
            {card.description || defaultText}
          </span>
          <span
            className={classList([
              "text-xs hidden",
              "xl:block xl:text-ellipsis xl:whitespace-nowrap xl:overflow-hidden",
            ])}
          >
            {urlWithoutProxy}
          </span>
        </div>
        <div className="w-10 h-full aspect-square flex-1">
          <img
            className="w-full h-full object-fit rounded-r"
            alt={`card-${card.title}`}
            src={card.image || "https://via.placeholder.com/400"}
          />
        </div>
      </div>
    </>
  );
};

export default FrontendTricks;
