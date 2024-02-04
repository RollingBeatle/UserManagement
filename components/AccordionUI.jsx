'use client'
import React from 'react'
import { useState } from 'react'

import {Accordion, AccordionHeader, AccordionBody} from '@material-tailwind/react'
import AllUsers from '@/components/AllUsers'

import SpecificUser from  '@/components/SpecificUser'
import CreateUser from '@/components/CreateUser'
import UpdateUser from '@/components/UpdateUser'
import DeleteUser from '@/components/DeleteUser'
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

        </Accordion>
        <Accordion open={open===2}>
            <AccordionHeader onClick={ () => handleOpen(2)}>
                    Search for specific user
            </AccordionHeader>
            <AccordionBody>
                <SpecificUser/>
            </AccordionBody>
        </Accordion>
        <Accordion open={open===3}>
            <AccordionHeader onClick={ () => handleOpen(3)}>
                    Create new user
            </AccordionHeader>
            <AccordionBody>
                <CreateUser/>
            </AccordionBody>
        </Accordion>
        <Accordion open={open===4}>
            <AccordionHeader onClick={ () => handleOpen(4)}>
                    Update user
            </AccordionHeader>
            <AccordionBody>
                <UpdateUser/>
            </AccordionBody>
        </Accordion>
        <Accordion open={open===5}>
            <AccordionHeader onClick={ () => handleOpen(5)}>
                    Delete User
            </AccordionHeader>
            <AccordionBody>
            <DeleteUser/>
            </AccordionBody>
        </Accordion>
    </section>
  )
}

export default AccordionUI