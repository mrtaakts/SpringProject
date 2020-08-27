package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.CommunicationInfo;
import com.tez.kariyer.model.entity.UserPrivateInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPrivateInfoRepository extends CrudRepository<UserPrivateInfo,Integer> {

    @Query("select comuser from UserPrivateInfo comuser where comuser.user.id=:id")
    UserPrivateInfo findByUserId(@Param("id") Integer id);

}
