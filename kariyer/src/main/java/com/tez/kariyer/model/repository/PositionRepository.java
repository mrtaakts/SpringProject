package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.Position;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionRepository extends CrudRepository<Position, Integer> {
}
