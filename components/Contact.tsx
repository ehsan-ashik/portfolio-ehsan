'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { contactdata } from '@/data/contactdata';
import { Send } from 'lucide-react';
import { NunitoSansFont } from '@/app/fonts';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${contactdata.email_address}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="w-full py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <div className="space-y-2">
                    <h2 className={`${NunitoSansFont.className} text-2xl font-bold opacity-95`}>
                        {contactdata.title}
                    </h2>
                    <p className="font-light opacity-90 pt-2">
                        {contactdata.description}
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Card>
                    <CardHeader>
                        <CardTitle>Send a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">{contactdata.input_fields.name}</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">{contactdata.input_fields.email}</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">{contactdata.input_fields.message}</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    required
                                    className="min-h-[150px]"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                <Send className="mr-2 h-4 w-4" />
                                {contactdata.btn_text}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}
