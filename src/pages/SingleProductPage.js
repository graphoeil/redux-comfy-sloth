// Imports
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/features/productsSlice";
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { Loading, Error, ProductImages, AddToCart, Stars, PageHero } from '../components';
import { Link } from 'react-router-dom';

// Component
const SingleProductPage = () => {

	// Store
	const { singleProduct:product, singleProductLoading:loading, 
		singleProductError:error } = useSelector((store) => { return store.products; });

	// Dispatch
	const dispatch = useDispatch();

	// Fetch single product
	const { id } = useParams();
	useEffect(() => {
		dispatch(fetchSingleProduct(`${ url }${ id }`));
	}, [id, dispatch]);

	// Single product data
	const { id:sku, name, price, description, stock, stars, reviews, company, images } = product;

	// Returns
	if (loading){
		return(
			<Wrapper>
				<div className="section section-center page-100">
					<Loading/>
				</div>
			</Wrapper>
		)
	}
	if (error){
		return(
			<Wrapper>
				<div className="section section-center page-100">
					<Error redirect/>
				</div>
			</Wrapper>
		)
	}
	return(
		<Wrapper>
			<PageHero title={ name }/>
			<div className="section section-center page">
				<Link to="/products" className="btn">Back to products</Link>
				<div className="product-center">

				</div>
			</div>
		</Wrapper>
	);
};

// Styled
const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}
	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

// Export
export default SingleProductPage;