import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TechSpecCard } from '@/components/tech-spec-card';
import { Calendar, Users, Award, Lightbulb, Shield, Zap, Heart } from 'lucide-react';

export default function AboutPage() {
  const storyMilestones = [
    { year: 2010, title: 'Foundation', description: 'Established as a pioneer in underwater lighting technology.' },
    { year: 2015, title: 'Innovation Breakthrough', description: 'Developed the first energy-efficient LED system for marine environments.' },
    { year: 2018, title: 'Global Expansion', description: 'Expanded operations to serve international markets with custom solutions.' },
    { year: 2023, title: 'Sustainability Focus', description: 'Achieved carbon-neutral certification and launched eco-friendly product line.' },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of underwater lighting technology with cutting-edge solutions.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Waterproof Safety',
      description: 'Ensuring complete protection and reliability in the most demanding underwater environments.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Energy Efficiency',
      description: 'Delivering powerful illumination while minimizing environmental impact and operational costs.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer Focus',
      description: 'Building lasting partnerships through exceptional service and tailored solutions.',
    },
  ];

  const certifications = [
    { title: 'CE Marking', description: 'European Conformity' },
    { title: 'RoHS Compliant', description: 'Restriction of Hazardous Substances' },
    { title: 'IP68 Rated', description: 'Waterproof and Dustproof' },
    { title: 'ISO 9001', description: 'Quality Management Systems' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="bg-linear-to-br from-background via-background to-muted/20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">AquaLight</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Illuminating the underwater world with innovative, sustainable lighting solutions since 2010.
              </p>
            </div>
          </section>

          {/* Story Timeline */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-primary to-blue-600"></div>
                {storyMilestones.map((milestone, index) => (
                  <div key={milestone.year} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="glassmorphism">
                        <CardHeader>
                          <CardTitle className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary">{milestone.year}</Badge>
                            {milestone.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Grid */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="glassmorphism text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                        {value.icon}
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Team/Expertise Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Engineering Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="glassmorphism text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <CardTitle>Research & Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our dedicated R&D team continuously innovates to create the most advanced underwater lighting solutions, staying ahead of industry trends and technological advancements.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glassmorphism text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Shield className="h-8 w-8" />
                    </div>
                    <CardTitle>Quality Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Every product undergoes rigorous testing in our state-of-the-art facilities, ensuring unparalleled reliability and performance in the harshest underwater conditions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glassmorphism text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Award className="h-8 w-8" />
                    </div>
                    <CardTitle>Engineering Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our expert engineering team combines decades of experience with cutting-edge technology to deliver solutions that exceed expectations and set new industry standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Expertise & Certifications */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Certifications & Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <TechSpecCard
                    key={index}
                    title={cert.title}
                    certifications={[cert.description]}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}