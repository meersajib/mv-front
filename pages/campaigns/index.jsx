
import React, { useMemo } from 'react'
import Slider from "react-slick";
import { BlogData } from "../../database/layouts/agency/database";
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import ModernSassLayout from '../../components/Layouts/modern-sass';
import CampaignCard from '../../components/Campaign/CampaignCard'

const CampaignIndex = () => {
	const demoItems = [
		{
			id: 1,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 2000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
		{
			id: 2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus. Donec euismod, nisl eget consectetur tempor, nisl nunc ultrices purus, vitae porttitor nisl nunc eget purus.',
			image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
			link: '#',
			price: 3000
		},
	]
	return (
		<ModernSassLayout title="campaigns-title">
			<section className='container'>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{
						demoItems.map((item,index)=>(
							<div className="col">
								<CampaignCard key={index} item={item}/>
							</div>
						))
					}
				</div>
			</section>
		</ModernSassLayout>

	)
}
export default CampaignIndex;