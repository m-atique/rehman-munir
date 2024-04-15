import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const data = [
  {name:"Umrah Group", label:"UMRAH (Makkah & Madina)", img:'https://fsdameeremillattourism.com/images/new_booking/umrah.jpeg'}
  ,
  {name:"KSA Group", label:"Saudi Arabia", img:'https://fsdameeremillattourism.com/admin_assets/images/saudi_arabia.jpg'}
  ,
  {name:"UAE Group", label:"United Arab Emirates", img:'https://fsdameeremillattourism.com/admin_assets/images/united-arab-emirates.jpg'}
  ,
  {name:"All Group", label:"All Available Groups", img:'https://fsdameeremillattourism.com/admin_assets/images/air-plan.jpg'}

]

export function PicCarousal() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true,  })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[94%]  h-full flex items-center justify-center "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-screen">
              <Card className=" p-4 bg-transparent border-transparent justify-center w-[102%]  ">
                {/* <CardContent className="border-transparent bg-transparent"> */}
                  <Image
                    src={item.img}
                    objectFit="cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-11/12 flex  h-[30rem] scale-100 object-fill rounded-md  border-black"
                  />
                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
