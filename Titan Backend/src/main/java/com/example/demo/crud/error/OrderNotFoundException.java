package com.example.demo.crud.error;

public class OrderNotFoundException extends RuntimeException
{
   	private static final long serialVersionUID = 1L;

	public OrderNotFoundException(){}

    public OrderNotFoundException(String message)
    {
         super(message);
    }
}
