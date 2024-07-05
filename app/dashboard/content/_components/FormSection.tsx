"use client"
import React, { useState } from 'react';
import { Template } from '../../_components/TemplateListSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface Props {
    selectedTemplate?: Template; 
    userFormInput:any// Define the type of selectedTemplate prop
    loading:boolean
}

function FormSection({ selectedTemplate,userFormInput,loading}: Props) {
    const [formData,setFormData]= useState<any>();
    const handleInputChange=(event:any)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})

    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormInput(formData);
    }
    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            {/* Render the icon if selectedTemplate is defined */}
            {selectedTemplate && (
                <img src={selectedTemplate.icon} alt='icon' width={70} height={70} />
            )}
            <h2 className='font-bold text-xl mb-2 text-primary'>
                {selectedTemplate?.name}
            </h2>
            <p className='text-grey-500 text-sm'>{selectedTemplate?.desc}</p>
            <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item,index)=>(
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='font-bold'>{item.label}</label>
                    {item.field=='input'?
                    <Input name={item.name} required={item?.required} onChange={handleInputChange}/>: item.field=='textarea'?
                    <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />:null
                }
                </div>
            )

            )}
            <Button type = "submit"className='w-full py-6' disabled={loading}>
                {loading &&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
            </form>
        </div>
    );
}

export default FormSection;
