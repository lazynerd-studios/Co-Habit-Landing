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
    Alert,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithCta() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
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
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
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
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                    Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                    Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                    and premium.
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80"
                        onClick={() => setOpenAlert(false)}
                    >
                        Dismiss
                    </Typography>
                    <Typography as="a" href="#" variant="small" className="font-medium">
                        Upgrade Now
                    </Typography>
                </div>
            </Alert>
        </Card>
    );
}




// {/* <div className='laptop:block min-w-fit hidden'>
//             {/* 01 */}
//             <section className='mb-10'>
//               <span className="flex font-semibold justify-between text-[1rem] leading-[1.6rem]">
//                 <p className="mb-5">
//                   Property Type
//                 </p>
//                 <span className="py-1">
//                   <BsChevronUp />
//                 </span>
//               </span>

//               <form className='select-none'>
//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="apartment"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="apartment"
//                     className="text-[#515B6F] px-4">
//                     Apartment (7,997)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="duplex"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="duplex"
//                     className="text-[#515B6F] px-4">
//                     Duplex (5)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="mini-flat"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="mini-flat"
//                     className="text-[#515B6F] px-4">
//                     Mini-Flat(2)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="bungalow"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="bungalow"
//                     className="text-[#515B6F] px-4">
//                     Bungalow (24)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="workspace"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="workspace"
//                     className="text-[#515B6F] px-4">
//                     Workspace (3)
//                   </label>
//                 </span>
//               </form>
//             </section>

//             {/* 02 */}
//             <section className='mb-10'>
//               <span className="flex font-semibold justify-between text-[1rem] leading-[1.6rem]">
//                 <p className="mb-5">
//                   Location
//                 </p>
//                 <span className="py-1">
//                   <BsChevronUp />
//                 </span>
//               </span>

//               <form className='select-none'>
//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="abuja"
//                     name=""
//                     value=""
//                     size={30}
//                     className=""
//                     checked />
//                   <label for="abuja"
//                     className="text-[#515B6F] px-4">
//                     Abuja(24)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="lagos"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="lagos"
//                     className="text-[#515B6F] px-4">
//                     Lagos(3)
//                   </label>
//                 </span>
//               </form>
//             </section>

//             {/* 03 */}
//             <section className='mb-10'>
//               <span className="flex font-semibold justify-between text-[1rem] leading-[1.6rem]">
//                 <p className="mb-5">
//                   Areas
//                 </p>
//                 <span className="py-1">
//                   <BsChevronUp />
//                 </span>
//               </span>

//               <form className='select-none'>
//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="abaji"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="abaji"
//                     className="text-[#515B6F] px-4">
//                     Abaji (57)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="bwari"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="bwari"
//                     className="text-[#515B6F] px-4">
//                     Bwari (3)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="Gwagwalada"
//                     name=""
//                     value=""
//                     size={30}
//                     className=""
//                   />
//                   <label for="Gwagwalada"
//                     className="text-[#515B6F] px-4">
//                     Gwagwalada(5)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="kuje"
//                     name=""
//                     value=""
//                     size={30}
//                     className=""
//                     checked />
//                   <label for="kuje"
//                     className="text-[#515B6F] px-4">
//                     Kuje (12)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="kwali"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="kwali"
//                     className="text-[#515B6F] px-4">
//                     Kwali (8)
//                   </label>
//                 </span>
//               </form>
//             </section>

//             {/* 04 */}
//             <section className='mb-10'>
//               <span className="flex font-semibold justify-between text-[1rem] leading-[1.6rem]">
//                 <p className="mb-5">
//                   Budget
//                 </p>
//                 <span className="py-1">
//                   <BsChevronUp />
//                 </span>
//               </span>

//               <form className='select-none'>
//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="100-500k"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="100-500k"
//                     className="text-[#515B6F] px-4">
//                     100k -500k (4)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="600-900k"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="600-900k"
//                     className="text-[#515B6F] px-4">
//                     600 - 900k (6)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="1-2m"
//                     name=""
//                     value=""
//                     size={30}
//                     className="" />
//                   <label for="1-2m"
//                     className="text-[#515B6F] px-4">
//                     1m - 2m (10)
//                   </label>
//                 </span>

//                 <span className='block mb-5'>
//                   <input type="checkbox"
//                     id="3m-above"
//                     name=""
//                     value=""
//                     size={30}
//                     className=" checked:bg-[#010886]"
//                     checked
//                   />

//                   <label for="3m-above"
//                     className="text-[#515B6F] px-4">
//                     3m or above (4)
//                   </label>

//                 </span>
//               </form>
//             </section>

//           </div> */}