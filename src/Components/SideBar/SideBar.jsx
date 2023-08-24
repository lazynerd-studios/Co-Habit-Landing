import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function SidebarWithContentSeparator() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-[calc(100vh-2rem)] hidden laptop:flex w-full max-w-[20rem] p-4">
            {/* shadow-xl shadow-blue-gray-900/5 */}

            {/* <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div> */}

            <List>

                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Property Type
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <input type="checkbox"
                                    id="apartment"
                                    name=""
                                    value=""
                                    size={30}
                                    className="" />
                                <label for="apartment"
                                    className="text-[#515B6F] px-4">
                                    Apartment (7,997)
                                </label>
                            </ListItem>

                            <ListItem>
                                <input type="checkbox"
                                    id="duplex"
                                    name=""
                                    value=""
                                    size={30}
                                    className="" />
                                <label for="duplex"
                                    className="text-[#515B6F] px-4">
                                    Duplex (5)
                                </label>
                            </ListItem>

                            <ListItem>

                            </ListItem>

                            <ListItem>

                            </ListItem>

                            <ListItem>

                            </ListItem>

                            <ListItem>

                            </ListItem>

                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>

                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>

                            </ListItem>

                            <ListItem>

                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Accordion
                    open={open === 3}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>

                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>

                            </ListItem>

                            <ListItem>

                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <Accordion
                    open={open === 4}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>

                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>

                            </ListItem>

                            <ListItem>

                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                <hr className="my-2 border-blue-gray-50" />

                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>


            </List>
        </Card>
    );
}