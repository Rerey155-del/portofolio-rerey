import React from 'react'

"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Checks, House, User, DeviceMobile, Medal, 
  Stack, SquaresFour, ChatCircleDots, Laptop, 
  Envelope, Link, WarningCircle, Keyboard,
  Sun, Moon, Lightning, MoonStars, Heart, Columns
} from "@phosphor-icons/react";

function Sidebar() {
  return (
    <div>
    <Avatar>
        <AvatarFallback></AvatarFallback>
    </Avatar>
    <div className="flex items-center gap-1 mb-2">
       <h2 className="font-semibold text-lg">Reyhan Maulana</h2>
       
    </div>
    </div>
  )
}

export default Sidebar