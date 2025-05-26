import { useRef } from 'react';
import { Paragraph } from '../components/Intro';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/ui/Button';

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  const scrollToFirstCat = () => {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };
  const scrollToSecondCat = () => {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };
  const scrollToThirdCat = () => {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <SectionHeading>
        Example: Scrolling to an element using useRef
      </SectionHeading>
      <div>
        <Paragraph>
          There is a carousel of three images. Each button centers an image by
          calling the browser scrollIntoView() method on the corresponding DOM
          node
        </Paragraph>
      </div>

      <nav className="flex gap-4 my-6">
        <Button onClick={scrollToFirstCat}>Neo</Button>
        <Button onClick={scrollToSecondCat}>Millie</Button>
        <Button onClick={scrollToThirdCat}>Bella</Button>
      </nav>

      <div className="w-full overflow-hidden border rounded-lg">
        <ul className="flex gap-4 min-w-max p-4">
          <li>
            <img
              className="min-w-xl h-[350px] rounded-md object-cover"
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              className="min-w-xl h-[350px] rounded-md object-cover"
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              className="min-w-xl h-[350px] rounded-md object-cover"
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
