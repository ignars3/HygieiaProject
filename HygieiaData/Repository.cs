using HygieiaData.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HygieiaData
{
    public class Repository<Model> where Model : class, IModel
    {
        protected readonly DataContext Context;

        public Repository(DataContext context)
        {
            Context = context;
        }

        public IEnumerable<Model> GetAll()
        {
            return Context.Set<Model>().ToList();
        }

        public Model GetById(int id)
        {
            return Context.Set<Model>().Find(id);
        }

        public bool Insert(Model entity)
        {
            if (entity.Id != default)
                throw new ArgumentException("Use default value for id property");

            Context.Set<Model>().Add(entity);

            Save();

            return true;
        }

        public bool Update(Model entity)
        {
            if (entity.Id == default)
                throw new ArgumentException("Can not use default id value");

            var oldEntity = GetById(entity.Id);

            Context.Entry(oldEntity).CurrentValues.SetValues(entity);

            Save();

            return true;
        }

        public bool Delete(int id)
        {
            var model = GetById(id);
            Context.Set<Model>().Remove(model);

            Save();

            return true;
        }

        public void Save()
        {
            Context.SaveChanges();
        }
    }
}
