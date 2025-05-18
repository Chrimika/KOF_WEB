"use client"
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from 'react'

export default function Billet() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Animation d'entrée
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        });

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [controls]);

    // Variants d'animation
    const billetVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8 }
        },
        hover: {
            scale: 1.03,
            boxShadow: '0 8px 20px rgba(255, 140, 0, 0.6)',
            transition: { duration: 0.3 }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.2 }
        }
    };

    // Effet de lueur pulsée
    useEffect(() => {
        if (isHovered) {
            const interval = setInterval(() => {
                controls.start({
                    boxShadow: [
                        '0 0 10px rgba(255, 215, 0, 0.7)',
                        '0 0 20px rgba(255, 215, 0, 0.9)',
                        '0 0 10px rgba(255, 215, 0, 0.7)'
                    ],
                    transition: { duration: 1.5, repeat: Infinity }
                });
            }, 1500);
            return () => clearInterval(interval);
        } else {
            controls.start({
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: { duration: 0.3 }
            });
        }
    }, [isHovered, controls]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={billetVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: isMobile ? '15vh' : '20vh',
                width: isMobile ? '90%' : '100%',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: '8px',
                backgroundColor: isMobile ? 'transparent' : '#FF8C00'
            }}
            onClick={() => router.push("/billeterie")}
        >
            {/* Image avec effet de profondeur */}
            <motion.img 
                src="/assets/images/billet.png" 
                alt="Billeterie KOF"
                initial={{ scale: 1 }}
                animate={{
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: isMobile ? 'contain' : 'cover',
                    objectPosition: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            />

            {/* Overlay au survol */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.3)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
            >
                Achetez vos billets !
            </motion.div>

            {/* Effet de particules dorées */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 3,
                        pointerEvents: 'none'
                    }}
                >
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: '6px',
                                height: '6px',
                                background: 'gold',
                                borderRadius: '50%',
                                filter: 'blur(1px)'
                            }}
                            initial={{
                                x: Math.random() * 100 - 50,
                                y: Math.random() * 100 - 50,
                                opacity: 0
                            }}
                            animate={{
                                x: Math.random() * 100 - 50,
                                y: Math.random() * 100 - 50,
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </motion.div>
    )
}