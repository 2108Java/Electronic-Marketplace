package com.revature.project2.repo;

import java.util.List;
import java.util.Optional;

import javax.persistence.Query;

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
import org.springframework.transaction.annotation.Transactional;

import com.revature.project2.models.CartItem;
import com.revature.project2.models.Purchase;
import com.revature.project2.models.User;

@Repository("UserDAO")
@Transactional
public class UserDAO implements JpaRepository<User, Integer> {


	@Autowired
	private SessionFactory sf;
	
		
	public void addUser(User u) {
		Session ses = sf.openSession();
		
		Transaction tx = ses.beginTransaction();
		
		//ses.save(u);
		System.out.println("running update user from userdao");
		//ses.update(u); 
		
		ses.save(u); 
		
		tx.commit();
		
		ses.close();
		
	}
	
	//public List<User> getAllUsers(){
	public User getAllUsers(int userId){
		
		List<User> ul = null;
		
		Session ses = sf.openSession();
	
		String query = "from user_table where user_id = "+ userId;

		ul = ses.createQuery(query, User.class).list();
		 
		
		return ul.get(0);
		
	}

	public User getUserByUsername(String username) {
		System.out.println("running getUserByUsername from userdao");
		
		List<User> userList = null;
		
		Session ses = sf.openSession();
		
		String hql = "from User where user_name = '" + username + "'";
		
		
		userList = ses.createQuery(hql,User.class).list();
		
		User u = userList.get(0);
		
		List<CartItem> cart = u.getCartItem();
		u.setCartItem(cart);
		
		//List<Purchase> pList = u.getPurchaseList();
		//u.setPurchaseList(pList);
		
		
		ses.close();
		
		return u;
	}
	
	public boolean existsByName(String username) {
		boolean exists = false;
		List<User> userList = null;
		
		System.out.println("running existsByUsername from userdao");
		
		Session ses = sf.openSession();
		
		String hql = "from User where user_name = '" + username + "'";
		
		
		userList = ses.createQuery(hql,User.class).list();
		
		
		if(!(userList == null)) {
			exists = true;
		}
		
		ses.close();
		
		return exists;
	}

	@Override
	public Page<User> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<User> findById(Integer id) {
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
	public void delete(User entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllById(Iterable<? extends Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends User> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends User> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends User> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findAll(Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findAllById(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> List<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public <S extends User> S saveAndFlush(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> List<S> saveAllAndFlush(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAllInBatch(Iterable<User> entities) {
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
	public User getOne(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends User> List<S> findAll(Example<S> example, Sort sort) {
		// TODO Auto-generated method stub
		return null;
	}



}