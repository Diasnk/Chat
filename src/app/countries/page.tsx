import * as React from "react"
 
import countries from '@/components/Countries'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

 
export default function Countries() {
  return (
    <div>
        <div className="flex justify-center w-full pt-32">
            <Carousel className="w-full max-w-xs">
                <CarouselContent className="">
                {countries.map((name, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                    <div className="text-4xl font-semibold">{countries[index].city}</div>
                                    <img className="w-fit" src={countries[index].img}></img>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>


        <div className="w-full flex justify-center p-20">
            <ScrollArea className="h-72 w-2/3 rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        {countries.map((name,index) => (
                            <>
                                <div key={index} className="text-sm">
                                    {index + 1 + ') ' + countries[index].city + ' in ' + countries[index].country + ' with ' + countries[index].tnum}
                                </div>
                            <Separator className="my-2" />
                            </>
                        ))}
                </div>
            </ScrollArea>
        </div>

    </div>
    
    
  )
}