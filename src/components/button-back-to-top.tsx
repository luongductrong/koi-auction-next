/** @format */

'use client';

import React, { useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

export default function BackToTopButton() {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return visible && <FloatButton type="primary" shape="circle" icon={<UpOutlined />} onClick={scrollToTop} />;
}
