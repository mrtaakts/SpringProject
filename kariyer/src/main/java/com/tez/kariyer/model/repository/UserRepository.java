package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);

    @Query("select user from User user where user.id=:id")
    User findByID(@Param("id") Integer id);

    @Query("select email from User email where email.email=:email")
    User getEmail(@Param("email") String email);
}
