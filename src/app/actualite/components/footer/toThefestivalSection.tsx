import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import React from "react";
import { wildwolf } from "../../font";

export const ToTheFestivalSection = () => {
  // Countdown data
  const countdownItems = [
    { value: "35", label: "Jrs" },
    { value: "23", label: "Hrs" },
    { value: "48", label: "Mins" },
    { value: "16", label: "Secs" },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Card className="w-full max-w-[1342px] border-[3px] border-solid border-[#0a1e00] rounded-none">
        <CardContent className="p-0">
          <div className="flex justify-center items-center py-16">
            {countdownItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="flex flex-col items-center">
                  <span className="[font-family:'Satoshi-Light',Helvetica] font-light text-black text-[86.7px] leading-none">
                    {item.value}
                  </span>
                  <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-black text-[14.2px] mt-5">
                    {item.label}
                  </span>
                </div>
                {index < countdownItems.length - 1 && (
                  <span className="[font-family:'Satoshi-Light',Helvetica] font-light text-black text-[86.7px] mx-4">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center max-w-[1029px] mt-12 mb-16 text-center">
        <h1
          className={`${wildwolf.className} font-normal text-black text-[64px] mb-8`}
        >
          Jusqu&apos;au festival
        </h1>

        <p className="[font-family:'Satoshi-Regular'] text-3xl mt-8">
          Ne manquez rien de cette édition du K-mer Otaku Festival, où vous
          vivrez une expérience mémorable en explorant l&apos;univers fascinant
          de la culture pop asiatique. Nous sommes impatients de vous accueillir
          et de partager ensemble cette aventure extraordinaire !
        </p>
      </div>

      <div className="flex w-full max-w-[1172px] mb-16">
        <Input
          className="h-[92px] rounded-none bg-[#d9d9d9] [font-family:'Satoshi-Regular'] text-bold text-[24px] placeholder:text-[24px] text-[#00000033] px-16"
          placeholder="VOTRE E-MAIL"
          style={{ fontSize: "24px" }}
        />
        <Button className="h-[92px] w-[540px] rounded-none bg-[#0A1E00] hover:bg-dark-green [font-family:'Rockwell_Extra_Bold-Regular'] font-bold text-[#FF0000] text-2xl">
          S&apos;ABONNER À LA NEWSLETTER
        </Button>
      </div>
    </div>
  );
};
