import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const BusinessCard = styled.div`
  background: ${({ bgColor }) => bgColor || "#f0f0f0"};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BusinessTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const BusinessDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const BusinessButton = styled.button`
  background: none;
  border: 2px solid #007aff;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #007aff;
    color: white;
  }
`;


function BusinessSection() {
    const businessData = [
        { title: "자동화", description: "공장의 자동화 기술.", bgColor: "#d8eaf7" },
        { title: "재활용", description: "폐기물 분류 및 처리.", bgColor: "#e2f6d8" },
        { title: "의료", description: "의료 장비 최적화.", bgColor: "#d8eaf7" },
        { title: "IT", description: "IT 기술 혁신.", bgColor: "#e2f6d8" },
    ];

  return (
    <Section>
      {businessData.map((business, index) => (
        <BusinessCard key={index} bgColor={business.bgColor}>
          <BusinessTitle>{business.title}</BusinessTitle>
          <BusinessDescription>{business.description}</BusinessDescription>
          <BusinessButton>더 알아보기</BusinessButton>
        </BusinessCard>
      ))}
    </Section>
  )
}

export default BusinessSection