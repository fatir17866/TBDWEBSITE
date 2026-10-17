type Props = {
  variant: "footer" | "preloader";
  className?: string;
};

// Path data for the "TBDEPLOYED" wordmark. Each letter is its own <path>, translated into place.
const LETTERS: { id: string; d: string; translate: string }[] = [
  { id: "tbd-letter-0-T", d: "M229 0V1422H20V1760H790V1422H581V0Z", translate: "0,0" },
  {
    id: "tbd-letter-1-B",
    d: "M78 0V1760H555Q747 1760 834.5 1666.5Q922 1573 922 1358V1281Q922 1157 877.5 1080.0Q833 1003 742 979Q861 949 901.5 838.5Q942 728 942 569Q942 398 910.0 270.0Q878 142 794.0 71.0Q710 0 555 0ZM422 1097H494Q543 1097 557.0 1135.0Q571 1173 571 1226V1403Q571 1488 496 1488H422ZM457 310Q594 310 594 440V660Q594 735 571.5 778.5Q549 822 487 822H422V312Q444 310 457 310Z",
    translate: "769.04,0",
  },
  {
    id: "tbd-letter-2-D",
    d: "M78 0V1760H562Q752 1760 848.0 1654.5Q944 1549 944 1346V522Q944 272 856.5 136.0Q769 0 550 0ZM432 311H493Q590 311 590 405V1313Q590 1401 566.5 1426.5Q543 1452 471 1452H432Z",
    translate: "1708.08,0",
  },
  { id: "tbd-letter-3-E", d: "M78 0V1760H782V1420H436V1077H768V746H436V343H805V0Z", translate: "2677.12,0" },
  {
    id: "tbd-letter-4-P",
    d: "M78 0V1760H543Q689 1760 774.5 1695.0Q860 1630 897.0 1510.0Q934 1390 934 1224Q934 1064 903.0 945.5Q872 827 792.5 762.0Q713 697 567 697H424V0ZM424 1013H444Q542 1013 564.0 1068.0Q586 1123 586 1230Q586 1330 564.5 1384.5Q543 1439 463 1439H424Z",
    translate: "3479.16,0",
  },
  { id: "tbd-letter-5-L", d: "M78 0V1760H430V300H792V0Z", translate: "4405.2,0" },
  {
    id: "tbd-letter-6-O",
    d: "M498 -16Q287 -16 175.5 111.5Q64 239 64 480V1316Q64 1542 174.5 1659.0Q285 1776 498 1776Q711 1776 821.5 1659.0Q932 1542 932 1316V480Q932 239 820.5 111.5Q709 -16 498 -16ZM501 308Q581 308 581 463V1322Q581 1452 503 1452Q415 1452 415 1319V461Q415 379 435.0 343.5Q455 308 501 308Z",
    translate: "5178.24,0",
  },
  { id: "tbd-letter-7-Y", d: "M291 0V579L10 1760H359L457 1164L555 1760H903L623 579V0Z", translate: "6133.28,0" },
  { id: "tbd-letter-8-E", d: "M78 0V1760H782V1420H436V1077H768V746H436V343H805V0Z", translate: "7006.32,0" },
  {
    id: "tbd-letter-9-D",
    d: "M78 0V1760H562Q752 1760 848.0 1654.5Q944 1549 944 1346V522Q944 272 856.5 136.0Q769 0 550 0ZM432 311H493Q590 311 590 405V1313Q590 1401 566.5 1426.5Q543 1452 471 1452H432Z",
    translate: "7808.36,0",
  },
];

// The preloader only ever shows the first 3 letters ("TBD"), matching the original runtime truncation.
export function TbdWordmark({ variant, className }: Props) {
  const letters = variant === "preloader" ? LETTERS.slice(0, 3) : LETTERS;
  return (
    <svg
      className={className}
      viewBox="0 0 1285.75 262.5"
      preserveAspectRatio="none"
      role="img"
      aria-label="TBDEPLOYED"
    >
      <g transform="translate(0,260.1562) scale(0.146484375,-0.146484375)" fill="currentColor" fillRule="evenodd">
        {letters.map((letter) => (
          <path key={letter.id} id={letter.id} d={letter.d} transform={`translate(${letter.translate})`} />
        ))}
      </g>
    </svg>
  );
}
