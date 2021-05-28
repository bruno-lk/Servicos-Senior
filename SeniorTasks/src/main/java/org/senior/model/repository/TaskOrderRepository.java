package org.senior.model.repository;

import org.senior.model.entity.TaskOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskOrderRepository extends JpaRepository<TaskOrder, Integer> {
}
