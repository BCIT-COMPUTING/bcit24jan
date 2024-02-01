// DiscussionSection component
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";
import { useTranslation } from 'next-i18next';
import '../app/globals.css';

interface DiscussionCardProps {
  imageSrc: string;
  title: string;
  numberOfComments: number;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ imageSrc, title, numberOfComments }) => {
  const { t } = useTranslation('common');

  const titleId = `title-${title.replace(/\s+/g, '-')}`; // replace spaces with dashes for ARIA functionality

  return (
    <div className="discussion-card max-h-full rounded overflow-hidden shadow-lg">
      <div className="relative">
        <Image src={imageSrc} alt={title} width={1000} height={667} id="discHeaderImg" className="w-48 h-96 object-cover rounded" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end">
          <div className="px-6 py-4 bg-white bg-opacity-0">
            <span className="inline-block bg-purple-700 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2 max-w-full">
              {/* Number of comments */}
              {t('comment', { count: numberOfComments })} 
            </span>
            <div className="flex items-center">
              <div id={titleId} className="text-xl mb-2 text-white max-w-full">{title}</div>
              <div className="ml-auto">
                <Link href={`/discussion/${title}`} aria-labelledby={titleId}>
                  <FiArrowRightCircle size={30} color="grey" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
