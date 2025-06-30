'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useI18n } from '@/context/i18n-provider';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const countries = [
  { name: 'United States', lang: 'en' },
  { name: 'Japan', lang: 'ja' },
  { name: 'India', lang: 'hi' },
  { name: 'Sri Lanka', lang: 'si' },
  { name: 'Russia', lang: 'ru' },
  { name: 'New Zealand', lang: 'en' },
];

export default function CountrySelectorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { setLocale } = useI18n();

  useEffect(() => {
    const countrySelected = sessionStorage.getItem('ukcas_country_selected');
    if (!countrySelected) {
      setIsOpen(true);
    }
  }, []);

  const handleCountrySelect = (lang: string) => {
    setLocale(lang);
    sessionStorage.setItem('ukcas_country_selected', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="sm:max-w-md"
        hideCloseButton={true}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe />
            Select Your Region
          </DialogTitle>
          <DialogDescription>
            Choose your country to tailor your experience and language.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
          {countries.map((country) => (
            <Button
              key={country.name}
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleCountrySelect(country.lang)}
            >
              {country.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
