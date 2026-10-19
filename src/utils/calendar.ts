import { weddingData } from '../data/wedding';

export function downloadCalendarEvent() {
  const startDate = '20261115T063000';
  const endDate = '20261115T210000';
  const title = `ពិធីអាពាហ៍ពិពាហ៍ ${weddingData.couple.groom.km} & ${weddingData.couple.bride.km} (${weddingData.couple.groom.en} & ${weddingData.couple.bride.en})`;
  const description = `សូមគោរពអញ្ជើញចូលរួមពិធីមង្គលការ ${weddingData.couple.groom.km} & ${weddingData.couple.bride.km}\\nទីតាំង: ${weddingData.venue.addressKm}\\nទូរស័ព្ទ: ${weddingData.contacts[0].phone}`;
  const location = `${weddingData.venue.nameKm}, ${weddingData.venue.addressKm}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Khmer Wedding Invitation//Rithy and Thida//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-rithy-thida-${Date.now()}@wedding.kh`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART;TZID=Asia/Phnom_Penh:${startDate}`,
    `DTEND;TZID=Asia/Phnom_Penh:${endDate}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `URL:${window.location.href}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Wedding-${weddingData.couple.groom.en}-${weddingData.couple.bride.en}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
