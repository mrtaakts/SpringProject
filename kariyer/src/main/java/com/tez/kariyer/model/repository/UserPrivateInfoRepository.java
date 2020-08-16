package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.UserPrivateInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPrivateInfoRepository extends CrudRepository<UserPrivateInfo,Integer> {
}
