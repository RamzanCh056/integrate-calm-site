import * as React from 'npm:react@18.3.1'
/// <reference types="npm:@types/react@18.3.1" />
import {
  Body, Button, Container, Head, Heading, Html, Link, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Day of Calm Summit"

interface RegistrationConfirmationProps {
  name?: string
}

const RegistrationConfirmationEmail = ({ name }: RegistrationConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for registering for the {SITE_NAME}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Dear ${name},` : 'Dear Participant,'}
        </Heading>
        <Text style={text}>
          Thank you for registering for the <strong>{SITE_NAME}</strong>. We're truly excited to have you join us on this journey toward peace, mindfulness, and well-being.
        </Text>
        <Text style={text}>
          The summit will take place from <strong>April 3rd to April 6th</strong>, and we encourage you to be part of each session to gain the full experience.
        </Text>

        <Text style={text}>
          You can join the live sessions through our official channels:
        </Text>

        <Section style={linkSection}>
          <Button style={youtubeButton} href="https://www.youtube.com/@DayofCalm">
            ▶ Watch on YouTube
          </Button>
        </Section>
        <Section style={linkSection}>
          <Button style={facebookButton} href="https://www.facebook.com/dayofcalm">
            📘 Watch on Facebook
          </Button>
        </Section>

        <Hr style={hr} />

        <Text style={text}>
          We look forward to seeing you there and sharing a calm and meaningful experience together.
        </Text>

        <Text style={footer}>
          Warm regards,<br />Day of Calm Team
        </Text>
        <Text style={footerSmall}>
          © 2026 Day of Calm Foundation. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: RegistrationConfirmationEmail,
  subject: `Thank you for registering for the ${SITE_NAME}!`,
  displayName: 'Registration confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '26px', fontWeight: '700' as const, color: '#1a3a2a', margin: '0 0 20px', fontFamily: "'Playfair Display', Georgia, serif" }
const text = { fontSize: '15px', color: '#4a6a5a', lineHeight: '1.6', margin: '0 0 16px' }
const linkSection = { textAlign: 'center' as const, margin: '8px 0' }
const youtubeButton = { backgroundColor: '#c4302b', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600' as const, textDecoration: 'none' }
const facebookButton = { backgroundColor: '#1877F2', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600' as const, textDecoration: 'none' }
const hr = { borderColor: '#e0ece6', margin: '28px 0' }
const footer = { fontSize: '14px', color: '#4a6a5a', margin: '0 0 8px' }
const footerSmall = { fontSize: '12px', color: '#9ab0a2', margin: '0' }
