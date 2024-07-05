"use client"
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { Template } from '../../_components/TemplateListSection'; // Assuming Template is exported from TemplateListSection
import Templates from '@/app/(data)/Templates'; // Assuming Templates is imported correctly
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { useUser } from '@clerk/clerk-react';

interface Props {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: Props) {
    const selectedTemplate: Template | undefined = Templates.find((item) => item.slug === props.params['template-slug']);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>(''); // Initialize aiOutput state

    const { user } = useUser(); // Assuming useUser hook returns user object

    const GenerateAIContent = async (formData: any) => {
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData) + ',' + SelectedPrompt; // Combine formData and selected prompt
        try {
            const result = await chatSession.sendMessage(FinalAIPrompt); // Assuming chatSession.sendMessage returns an object with response.text()
            setAiOutput(result?.response.text); // Update aiOutput state with AI response
        } catch (error) {
            console.error('Error generating AI content:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-5'>
            <Link href='/dashboard'> {/* Use single quotes for consistent syntax */}
                <Button>
                    <ArrowLeft /> Back
                </Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                <FormSection selectedTemplate={selectedTemplate} userFormInput={GenerateAIContent} loading={loading} />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} /> {/* Pass aiOutput to OutputSection component */}
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
