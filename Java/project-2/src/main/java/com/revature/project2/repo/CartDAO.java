package com.revature.project2.repo;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.project2.models.CartItem;

@Repository("CartDAO")
@Transactional
public class CartDAO implements JpaRepository<CartItem, Integer>{
	
	
	/* sessionFactory = HibernateAnnotationUtil.getSessionFactory();
session = sessionFactory.getCurrentSession();
System.out.println("Session created");
	    
tx = session.beginTransaction();

session.save(cart);
session.save(item1);
session.save(item2);
	    
tx.commit();
System.out.println("Cart ID=" + cart.getId());

System.out.println("item1 ID=" + item1.getId() + ", Foreign Key Cart ID=" + item.getCart().getId());

System.out.println("item2 ID=" + item2.getId() + ", Foreign Key Cart ID=" + item.getCart().getId());
	 */
	
	@Autowired
	private SessionFactory sf;
	
	public boolean addCartItem(CartItem ci) {
		
		System.out.println("Inside cart : addcartItem");
		System.out.println("setting user id");
		
		//ci.setUserId(11);
		
		Session ses = sf.openSession();
		
		Transaction tx = ses.beginTransaction();
		
		
		//"update cart_table set user_id_fk= " + 1 + " where cartId=" + 4;
		
		String query = "update cart_table set user_id_fk = 1 where cart_id = 4";
		
		ses.createSQLQuery(query);
		
		ses.save(ci);
		
		tx.commit();
		
		return true;
	}
	
	public CartItem getCartItem(int userId, int sku) {
		
		Session ses = sf.openSession();
		
		String query = "from cart_table where userId = " + userId + " and sku = " + sku;
		
		CartItem cartItem = (CartItem) ses.createQuery(query, CartItem.class);
		
		return cartItem;
		
	}
	
	public List<CartItem> getCart(Integer userId){
		
		List<CartItem> cart = null;
		
		Session ses = sf.getCurrentSession();
		
		String query = "from cart_table where userId = " + userId;
		
		cart = ses.createQuery(query, CartItem.class).list();
	
		return cart;
		
	}
	
	public boolean deleteCartItem(CartItem ci) {
		
		Session ses = sf.openSession();
		
		Transaction tx = ses.beginTransaction();
		
		ses.remove(ci);
		
		tx.commit();
		
		return true;
		
	}
	

	@Override
	public Page<CartItem> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<CartItem> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(CartItem entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllById(Iterable<? extends Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends CartItem> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends CartItem> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends CartItem> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<CartItem> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CartItem> findAll(Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CartItem> findAllById(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> List<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends CartItem> S saveAndFlush(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> List<S> saveAllAndFlush(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAllInBatch(Iterable<CartItem> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllByIdInBatch(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllInBatch() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public CartItem getOne(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CartItem getById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends CartItem> List<S> findAll(Example<S> example, Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

}