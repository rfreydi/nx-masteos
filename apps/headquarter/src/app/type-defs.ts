import { gql } from 'apollo-server';
import * as Actor from './actor.graphql';
import * as Movie from './movie.graphql';
import * as User from './user.graphql';

export const typeDefs = gql`${Actor}${Movie}${User}`;
