import * as React from 'npm:react@18.3.1'
/// <reference types="npm:@types/react@18.3.1" />
import {
  Body, Button, Container, Head, Heading, Html, Link, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "International Day of Calm Summit 2026"

interface RegistrationConfirmationProps {
  name?: string
}

const RegistrationConfirmationEmail = ({ name }: RegistrationConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You're registered for the {SITE_NAME}! April 3–6, 2026</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Welcome, ${name}!` : 'You\'re Registered!'}
        </Heading>
        <Text style={text}>
          Thank you for registering for the <strong>{SITE_NAME}</strong> — a free, live, global event dedicated to practical tools for a calmer life.
        </Text>

        <Section style={dateBox}>
          <Text style={dateText}>📅 April 3–6, 2026</Text>
          <Text style={dateSubtext}>Live sessions — no recordings available</Text>
        </Section>

        <Heading as="h2" style={h2}>Watch Live On:</Heading>

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
          We'll send you live stream links the day before each session. Add <strong>April 3–6</strong> to your calendar so you don't miss it!
        </Text>

        <Text style={text}>
          This summit brings together 20+ speakers sharing real-world strategies for less stress, reactivity, and overwhelm. Join thousands from around the world — live.
        </Text>

        <Section style={{ textAlign: 'center' as const, marginTop: '24px' }}>
          <Button style={ctaButton} href="https://calmsummit.org/#donate">
            Support the Mission — Donate
          </Button>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          With calm,<br />The Day of Calm Foundation Team
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
  subject: `You're registered for the ${SITE_NAME}!`,
  displayName: 'Registration confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '26px', fontWeight: '700' as const, color: '#1a3a2a', margin: '0 0 20px', fontFamily: "'Playfair Display', Georgia, serif" }
const h2 = { fontSize: '18px', fontWeight: '600' as const, color: '#1a3a2a', margin: '24px 0 12px', fontFamily: "'Playfair Display', Georgia, serif" }
const text = { fontSize: '15px', color: '#4a6a5a', lineHeight: '1.6', margin: '0 0 16px' }
const dateBox = { backgroundColor: '#f0f7f4', borderRadius: '12px', padding: '16px 20px', margin: '20px 0', textAlign: 'center' as const }
const dateText = { fontSize: '20px', fontWeight: '700' as const, color: '#1a3a2a', margin: '0 0 4px' }
const dateSubtext = { fontSize: '13px', color: '#6b8a7a', margin: '0' }
const linkSection = { textAlign: 'center' as const, margin: '8px 0' }
const youtubeButton = { backgroundColor: '#c4302b', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600' as const, textDecoration: 'none' }
const facebookButton = { backgroundColor: '#1877F2', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600' as const, textDecoration: 'none' }
const ctaButton = { backgroundColor: '#2d7a50', color: '#ffffff', padding: '14px 32px', borderRadius: '24px', fontSize: '16px', fontWeight: '700' as const, textDecoration: 'none' }
const hr = { borderColor: '#e0ece6', margin: '28px 0' }
const footer = { fontSize: '14px', color: '#4a6a5a', margin: '0 0 8px' }
const footerSmall = { fontSize: '12px', color: '#9ab0a2', margin: '0' }
