'use client'
import React from 'react'
import { useState } from 'react'

import {Accordion, AccordionHeader, AccordionBody} from '@material-tailwind/react'
import AllUsers from '@/components/AllUsers'

import SpecificUser from  '@/components/SpecificUser'

const AccordionUI = () => {
    const [open, setOpen] = useState(1)

    const handleOpen = (value) =>{
        setOpen(open === value ? 0: value);
    }

  return (
    <section>
        <Accordion open={open===1}>
            <AccordionHeader onClick={ () => handleOpen(1)}>
                All users
            </AccordionHeader>
            <AccordionBody>
                <AllUsers/>
            </AccordionBody>
            <AccordionHeader onClick={ () => handleOpen(2)}>
                <SpecificUser/>
            </AccordionHeader>
        </Accordion>
        <Accordion>
            
        </Accordion>
    </section>
  )
}

export default AccordionUI