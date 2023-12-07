import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ContainedButton } from '../Button';

function DonateTab() {
  const [activeElement, setActiveElement] = useState('UA');
  const titleStyles = {
    fontSize: { xs: '1.125rem', md: '1.5rem' },
    marginBottom: { md: '12px' },
    lineHeight: 'normal',
  };
  const textStyles = {
    fontSize: { xs: '0.875rem', md: '1.25rem' },
    lineHeight: 'normal',
  };
  const handleButtonClick = (element) => {
    setActiveElement(element);
  };
  return (
    <>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          gap: { xs: '16px', md: '17px' },
          paddingLeft: { xs: '0.7rem', md: '0' },
          position: 'relative',
          marginBottom: { xs: '52px', md: '24px' },
          justifyContent: { md: 'center' },
        }}>
        <ContainedButton
          btnName="btnCurrency"
          text="UAH"
          onClick={() => handleButtonClick('UA')}
        />
        <ContainedButton
          btnName="btnCurrency"
          text="USD"
          onClick={() => handleButtonClick('USD')}
        />
        <ContainedButton
          btnName="btnCurrency"
          text="EUR"
          onClick={() => handleButtonClick('EUR')}
        />
        <ContainedButton
          btnName="btnCurrency"
          text="CRYPTO"
          onClick={() => handleButtonClick('CRYPTO')}
        />
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '-21px', md: '106px' },
            right: { xs: '-16px', md: '-61px' },
            width: { xs: '312px' },
            height: { xs: '285px' },
            zIndex: { xs: '-1' },
          }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/girl.png`}
            alt="smiling girl with long hair"
            width="100%"
            height="100%"
          />
        </Box>
      </Stack>
      <Box sx={{ maxWidth: { md: '71%' } }}>
        {activeElement === 'UA' && (
          <>
            <Typography sx={titleStyles}>Рахунок гривня</Typography>
            <Typography sx={textStyles}>
              <span>Найменування отримувача: </span>
              <span style={{ fontWeight: '700' }}>БО БФ РДМ</span>
            </Typography>
            <Typography sx={textStyles}>
              <span>IBAN ₴: </span>
              <span style={{ fontWeight: '700' }}>
                UA383052990000026005005020458
              </span>
            </Typography>
            <Typography sx={textStyles}>
              <span>Банк отримувача: </span>
              <span style={{ fontWeight: '700' }}>АТ КБ «ПриватБанк»</span>
            </Typography>
            <Typography sx={textStyles}>
              <span>Призначення платежу: </span>
              <span style={{ fontWeight: '700' }}>Благодійний внесок</span>
            </Typography>
          </>
        )}
        {activeElement === 'USD' && (
          <>
            <Typography sx={titleStyles}>Рахунок USD</Typography>
            <Typography sx={textStyles}>
              <span>Company Name: </span>
              <span style={{ fontWeight: '700' }}>CF KF</span>
            </Typography>
            <Typography sx={textStyles}>
              <span>IBAN Code: </span>
              <span style={{ fontWeight: '700' }}>
                UA093052990000026002025026071
              </span>
            </Typography>
          </>
        )}
        {activeElement === 'EUR' && (
          <>
            <Typography sx={titleStyles}>Рахунок EUR</Typography>
            <Typography sx={textStyles}>
              <span>Company Name: </span>
              <span style={{ fontWeight: '700' }}>CF KF</span>
            </Typography>
            <Typography sx={textStyles}>
              <span>IBAN Code: </span>
              <span style={{ fontWeight: '700' }}>
                UA753052990000026001005025554
              </span>
            </Typography>
          </>
        )}
        {activeElement === 'CRYPTO' && (
          <>
            <Typography sx={titleStyles}>Рахунок CRYPTO</Typography>
            <Typography sx={textStyles}>
              <span>ETH (Ethereum (ERC20): </span>
              <span style={{ fontWeight: '700' }}>
                0x62a4bd638e11476f6fcd7b815c63622833e47692
              </span>
            </Typography>
            <Typography sx={textStyles}>
              <span>USDT (Tron(TRC20): </span>
              <span style={{ fontWeight: '700' }}>
                THTDtyqcNa2ZsWfht2XgXtBpxNsV1hL92Y
              </span>
            </Typography>
            <Typography sx={textStyles}>
              <span>BTC (BTC Bitcoin): </span>
              <span style={{ fontWeight: '700' }}>
                1MVxKxHpMkLUhrpwJMwSLqcN1peL8fk3M
              </span>
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}

export default DonateTab;